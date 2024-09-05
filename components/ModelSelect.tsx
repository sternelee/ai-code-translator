import { OpenAIModel } from '@/types/types';
import { FC } from 'react';

interface Props {
  model: OpenAIModel;
  onChange: (model: OpenAIModel) => void;
}

export const ModelSelect: FC<Props> = ({ model, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as OpenAIModel);
  };

  return (
    <select
      className="h-[40px] w-[140px] rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={model}
      onChange={handleChange}
    >
      <option value="openrouter/auto">Auto</option>
      <option value="openai/gpt-4o-2024-08-06">OpenAI: ChatGPT-4o</option>
      <option value="openai/gpt-4">OpenAI: ChatGPT-4</option>
      <option value="google/gemini-pro-1.5-exp">Google: Gemini Pro 1.5</option>
      <option value="anthropic/claude-3.5-sonnet">Anthropic: Claude 3.5 Sonnet</option>
    </select>
  );
};
