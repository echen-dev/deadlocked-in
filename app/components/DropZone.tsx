import { useDroppable } from "@dnd-kit/react";

const DropZone = ({
  id,
  children,
}: {
  id: string;
  children?: React.ReactNode;
}) => {
  const { ref, isDropTarget } = useDroppable({
    id,
    type: "row",
    accept: "tier-item",
  });

  return (
    <div
      ref={ref}
      className="flex flex-wrap justify-items-start overflow-x-hidden gap-2 p-2 min-h-20"
    >
      {children}
    </div>
  );
};

export default DropZone;
