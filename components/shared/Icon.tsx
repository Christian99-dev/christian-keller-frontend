export default function Icon({ name }: { name: string }) {
  return (
    <span className={`material-symbols-outlined h-min w-min text-7 text-black`}>
      {name}
    </span>
  );
}
