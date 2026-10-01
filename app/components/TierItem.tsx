import { useSortable } from "@dnd-kit/react/sortable";
import type { Hero } from "~/types";

const TierItem = ({
  id,
  index,
  column,
}: {
  id: string;
  index: number;
  column: string;
}) => {
  const { ref, isDragging } = useSortable({
    id,
    index,
    type: "tier-item",
    accept: "tier-item",
    group: column,
  });

  return (
    <button ref={ref} data-dragging={isDragging}>
      <img src={id} alt={"tier item"} className="h-20" />
    </button>
  );
};

export default TierItem;
