import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

interface CustomDisclosureProps {
  buttonText: string;
  panelText: string;
}

const CustomDisclosure = ({ buttonText, panelText }: CustomDisclosureProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between py-3 items-center rounded-lg px-4 mt-4 md:py-4 text-left text-sm md:text-lg font-semibold text-fuchsia-950 hover:text-fuchsia-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
            <span className="flex-1 pr-14 md:pr-3">{buttonText}</span>
            {open ? (
              <MinusIcon className="h-5 w-5 text-white bg-fuchsia-950 rounded-xl" />
            ) : (
              <PlusIcon className="h-5 w-5 text-white bg-fuchsia-500 rounded-xl" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-6 pt-4 text-sm text-gray-500 border-b border-gray-100">
            {panelText}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default CustomDisclosure;
