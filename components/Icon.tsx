export default function Icon({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "medium";
}) {
  return (
    <span
      className={`material-symbols-outlined h-min w-min ${
        size === "small" ? "text-7" : "text-5"
      } text-black`}
    >
      {name}
    </span>
  );
}
