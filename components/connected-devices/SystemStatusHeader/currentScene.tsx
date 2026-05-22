type CurrentSceneProps = {
  scene: string;
};

export function CurrentScene({ scene }: CurrentSceneProps) {
  return (
    <p className="text-sm text-slate-700">
      Current scene: <span className="font-medium text-slate-900">{scene}</span>
    </p>
  );
}
