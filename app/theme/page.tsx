import Icon from "@/components/Icon";

export default function Theme() {
  const colClass = "flex flex-col items-center";
  return (
    <div className="flex justify-center items-center h-screen gap-10">
      <div className={colClass}>
        <p className="text-3">fs-3</p>
        <p className="text-4">fs-4</p>
        <p className="text-5">fs-5</p>
        <p className="text-6">fs-6</p>
        <p className="text-7">fs-7</p>
        <p className="text-8">fs-8</p>
        <p className="text-9">fs-9</p>
        <p className="text-10">fs-10</p>
      </div>
      <div className={colClass}>
        <Icon name="search" size="small" />
        <Icon name="search" size="medium" />
      </div>
      <div className={colClass}>
        <div className="grid grid-cols-4 gap-4">
          <div className="size-10 bg-bleu-de-france"></div>
          <div className="size-10 bg-bordeaux"></div>
          <div className="size-10 bg-vermeil"></div>
          <div className="size-10 bg-bleu-marine"></div>

          <div className="size-10 bg-gris-perle"></div>
          <div className="size-10 bg-rouge"></div>
          <div className="size-10 bg-jaune-moutarde"></div>
          <div className="size-10 bg-rose-poudre"></div>

          <div className="size-10 bg-vert-cedre"></div>
          <div className="size-10 bg-blanc-casse"></div>
          <div className="size-10 bg-taupe"></div>
          <div className="size-10 bg-lavande"></div>

          <div className="size-10 bg-moutarde"></div>
          <div className="size-10 bg-ecru"></div>
          <div className="size-10 bg-noir"></div>
          <div className="size-10 bg-ciel"></div>
        </div>
      </div>
    </div>
  );
}
