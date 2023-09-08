"use client";
import useDebounce from "@/hooks/useDebounce";

import qs from "query-string";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debounceValue,
    };

    const url = qs.stringifyUrl({
      url: "/search/",
      query: query,
    });

    router.push(url);
  }, [debounceValue, router]);

  return (
    <div>
      <Input
        placeholder="What Do you Want to Listen to ?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
