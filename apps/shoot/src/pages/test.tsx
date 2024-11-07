import { Button } from '@/components/Button';

export async function loader() {
  return {};
}

export const Component = () => {
  return (
    <div className="flex flex-col gap-1">
      <Button onClick={() => alert('pay')}>Pay 20,000 Coins</Button>
      <Button>Try Again</Button>
      <Button>Got It!</Button>
      <Button>Use Now</Button>
      <Button variants="secondary">Use</Button>
      <Button
        onClick={() => alert('disable use')}
        variants="secondary"
        disabled
      >
        Use
      </Button>
    </div>
  );
};
