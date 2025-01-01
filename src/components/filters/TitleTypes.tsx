import FilterOptionsCheckContainer from "@/components/common/FilterOptionsCheckContainer";
import React, { useEffect, useState } from "react";
import { VehicleTitle } from "@/types/vehicle";
import { useFilters } from "@/components/common/Filters";
import { useSearchParams } from "next/navigation";

export default function TitleTypes() {
  const { titleTypes, checked } = useTitleTypes();
  const { handleCheckChange: handleChange } = useFilters();
  return (
    <div className="widget catagory mb-4">
      <h6 className="widget-title mb-2">Tipo de título</h6>
      <FilterOptionsCheckContainer>
        {!titleTypes.loading &&
          !titleTypes.error &&
          titleTypes.data.map((item) => (
            <div key={item.key} className="form-check">
              <input
                className="form-check-input"
                id={item.key}
                type="checkbox"
                name="TitleTypes"
                value={item.key}
                onChange={handleChange}
                checked={checked(item.key)}
              />
              <label className="form-check-label" htmlFor={item.key}>
                {item.meaning}
              </label>
            </div>
          ))}
        {titleTypes.loading &&
          [0, 1, 2].map((i) => (
            <div key={i} className="placeholder">
              <div className="form-input placeholder-glow"></div>
            </div>
          ))}
      </FilterOptionsCheckContainer>
    </div>
  );
}

export const useTitleTypes = () => {
  const [titleTypes, setTitleTypes] = useState<{
    data: VehicleTitle[];
    loading: boolean;
    error: boolean;
  }>({ data: [], loading: true, error: false });
  useEffect(() => {
    const controller = new AbortController();
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/filters/vehicle-title`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => setTitleTypes({ data: res, loading: false, error: false }))
      .catch((reason) => {
        if (reason instanceof DOMException && reason.name === "AbortError") {
          return null;
        } else {
          setTitleTypes({ data: [], loading: false, error: true });
        }
      });

    return () => {
      controller.abort();
    };
  }, []);
  const searchParams = useSearchParams();
  const checked = (titleVal: string) => {
    const titles = searchParams.getAll("TitleTypes") ?? [];

    return titles.includes(titleVal);
  };

  return { titleTypes, checked };
};
