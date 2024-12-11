export default function Icon({
  name,
  size = "regular",
}: {
  name: string;
  size?: "regular" | "logo";
}) {
  return (
    <span
      className={`material-symbols-outlined h-min w-min ${
        size === "logo" ? "text-6" : "text-5"
      } text-black`}
    >
      {name}
    </span>
  );
}
