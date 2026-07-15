const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';

interface GroqMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface GroqOptions {
  model?: string;
  temperature?: number;
  max_tokens?: number;
  signal?: AbortSignal;
}

function getApiKey(): string {
  return (process.env.OPENROUTER_API_KEY || process.env.API_KEY || '') as string;
}

export async function groqChat(messages: GroqMessage[], options?: GroqOptions): Promise<string> {
  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getApiKey()}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Studivance',
    },
    body: JSON.stringify({
      model: options?.model || 'meta-llama/llama-3.3-70b-instruct',
      messages,
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.max_tokens || 4096,
    }),
    signal: options?.signal,
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`OpenRouter API error ${response.status}: ${errBody}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

export async function groqChatJSON<T = any>(messages: GroqMessage[], options?: GroqOptions): Promise<T> {
  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getApiKey()}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Studivance',
    },
    body: JSON.stringify({
      model: options?.model || 'meta-llama/llama-3.3-70b-instruct',
      messages,
      response_format: { type: 'json_object' },
      temperature: options?.temperature ?? 0.2,
      max_tokens: options?.max_tokens || 4096,
    }),
    signal: options?.signal,
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`OpenRouter API error ${response.status}: ${errBody}`);
  }

  const data = await response.json();
  return JSON.parse(data.choices[0].message.content);
}

export async function* groqChatStream(messages: GroqMessage[], options?: GroqOptions): AsyncGenerator<string> {
  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getApiKey()}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.origin,
      'X-Title': 'Studivance',
    },
    body: JSON.stringify({
      model: options?.model || 'meta-llama/llama-3.3-70b-instruct',
      messages,
      stream: true,
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.max_tokens || 4096,
    }),
    signal: options?.signal,
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`OpenRouter API error ${response.status}: ${errBody}`);
  }

  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || !trimmed.startsWith('data: ')) continue;
      const data = trimmed.slice(6);
      if (data === '[DONE]') return;
      try {
        const parsed = JSON.parse(data);
        const content = parsed.choices?.[0]?.delta?.content;
        if (content) yield content;
      } catch {}
    }
  }
}

export function groqSystemMsg(content: string): GroqMessage {
  return { role: 'system', content };
}

export function groqUserMsg(content: string): GroqMessage {
  return { role: 'user', content };
}

export function groqAssistantMsg(content: string): GroqMessage {
  return { role: 'assistant', content };
}
