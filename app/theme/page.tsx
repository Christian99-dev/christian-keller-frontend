import Icon from "@/components/Icon";

export default function Theme() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <p className="text-3">fs-3</p>
      <p className="text-4">fs-4</p>
      <p className="text-5">fs-5</p>
      <p className="text-6">fs-6</p>
      <p className="text-7">fs-7</p>
      <p className="text-8">fs-8</p>
      <p className="text-9">fs-9</p>
      <p className="text-10">fs-10</p>
      <Icon name="search" size="small" />
      <Icon name="search" size="medium" />
    </div>
  );
}
