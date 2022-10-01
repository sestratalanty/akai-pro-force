import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  ComputerDesktopIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "1",
    description: "No need to connect to PC and download programms",
    icon: FolderArrowDownIcon,
  },
  {
    name: "2",
    description:
      "Instead of many monitors just one 7 inches sensor screen with RGB lightning",
    icon: ComputerDesktopIcon,
  },
  {
    name: "3",
    description:
      "16 hours without recharging. Connect through Bluetooth, USB-A 3.0 or Ableton Link",
    icon: BoltIcon,
  },
  {
    name: "4",
    description:
      "Lessons for beginners. Two user friendly video tutorials for easy start",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function Product() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            Akai Pro Force
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            BE FREE
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            To create music anytime everywhere without PC
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
