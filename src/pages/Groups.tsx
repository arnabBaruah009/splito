import { useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Group from "../components/Groups/Group";
import GROUP_MODAL from "../components/Groups/AddGroup_Modal";
import { useUser } from "../hooks/useUser";

const Groups = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groups, setGroups] = useState<string[]>([]);

  useEffect(() => {
    setGroups(user?.groups || []);
  }, [user?.groups]);

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="">Groups</h1>
        <button
          type="button"
          onClick={onOpen}
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          + Add Group
        </button>
      </div>

      <div className="grid grid-cols-2 grid-rows-auto gap-6">
        {groups.map((groupID) => (
          <Group key={groupID} id={groupID} />
        ))}
      </div>
      <GROUP_MODAL isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Groups;
