/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { LatLngExpression } from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { X } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { TooltipProvider } from "../ui/tooltip";

interface Props {
  title?: string;
  setSearchingLocation?: React.Dispatch<
    React.SetStateAction<LatLngExpression | undefined>
  >;
}

type result = {
  x: number; // lon,
  y: number; // lat,
  label: string; // formatted address
  bounds: [
    [number, number], // s, w - lat, lon
    [number, number], // n, e - lat, lon
  ];
  raw: {}; // raw provider result
};
const LeafletSearch = ({ title, setSearchingLocation, ...rest }: Props) => {
  const [results, setResults] = React.useState<result[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const provider = new OpenStreetMapProvider({
    params: {
      addressdetails: 1,
      countrycodes: "ir",
    },
  });
  const inputRef = React.useRef<HTMLInputElement>(null);

  function searchLocation(query: string) {
    // wait 1 second before search
    setTimeout(async () => {
      provider.search({ query }).then((res) => {
        setResults(
          res.map((item) => ({
            x: item.x,
            y: item.y,
            label: item.label,
            bounds: item.bounds || [
              [0, 0],
              [0, 0],
            ],
            raw: item.raw,
          })),
        );
        setOpenMenu(true);
      });
    }, 500);
  }

  return (
    <TooltipProvider>
      <div
        className='flex flex-col absolute z-50 top-2 right-2 transition-all duration-300 w-full'
        style={{
          gap: openMenu ? "0.5rem" : "0",
        }}
      >
        <div className='flex bg-white max-w-[96%] md:max-w-[70%] w-[30%] rounded-md z-50 items-center p-2 shadow-2xl'>
          <Input
            ref={inputRef}
            title={title}
            id='search-input'
            placeholder='جستجوی مکان'
            className='border-0 shadow-none'
            {...rest}
            onChange={(e) => {
              setInputValue(e.target.value);
              searchLocation(e.target.value);
            }}
            value={inputValue}
          />
          <X
            className={`${
              inputValue.length > 0 ? "flex" : "hidden"
            } text-gray-500 cursor-pointer`}
            onClick={() => {
              setInputValue("");
              setOpenMenu(false);
              setResults([]);
              setSearchingLocation && setSearchingLocation(undefined);
            }}
          />
        </div>

        {/* <DropdownMenu open={openMenu} onOpenChange={setOpenMenu} modal={false}> */}
        <div
          className={`flex flex-col justify-start items-start gap-1 max-h-[300px] overflow-y-auto bg-[#fff] rounded-md p-2 w-full max-w-[96%] md:mx-0 md:max-w-[70%] overflow-x-hidden ${
            openMenu ? "flex" : "hidden"
          }`}
          style={{
            boxShadow: "0 0 40px 10px rgba(0,0,0,0.1)",
            width: inputRef.current?.offsetWidth,
          }}
        >
          {results.map((item, index) => (
            // <Tooltip key={index}>
            //   <TooltipTrigger>{item.label}</TooltipTrigger>
            //   <TooltipContent>
            <div
              key={index}
              onClick={() => {
                setInputValue(item.label);
                setOpenMenu(false);
                setSearchingLocation && setSearchingLocation([item.y, item.x]);
                // setLocation([item.y, item.x]);
              }}
            >
              {item.label}
            </div>
            //   </TooltipContent>
            // </Tooltip>
          ))}
        </div>
        {/* </DropdownMenu> */}
      </div>
    </TooltipProvider>
  );
};

export default LeafletSearch;
