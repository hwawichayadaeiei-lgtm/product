"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  defaultQuery,
  SearchQuerySchema,
  SORT_FIELDS,
  type SearchQuery,
} from "@/lib/products";

type ProductSearchFormProps = {
  onSearch: (query: SearchQuery) => void;
};

export default function ProductSearchForm({
  onSearch,
}: ProductSearchFormProps) {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<SearchQuery>({
    resolver: zodResolver(SearchQuerySchema),
    defaultValues: defaultQuery,
  });

  function submitSearch(data: SearchQuery) {
    onSearch(data);
  }

  function clearSearch() {
    reset(defaultQuery);
    onSearch(defaultQuery);
  }

  return (
    <section className="product-search">
      <form onSubmit={handleSubmit(submitSearch)}>
        <div>
          <label htmlFor="q">
            คำค้น
          </label>

          <input
            id="q"
            type="text"
            {...register("q")}
            placeholder="ค้นหาสินค้า..."
          />
        </div>

        <div>
          <label htmlFor="limit">
            จำนวนรายการ
          </label>

          <input
            id="limit"
            type="number"
            min="1"
            max="100"
            {...register("limit", {
              valueAsNumber: true,
            })}
          />
        </div>

        <div>
          <label htmlFor="sortBy">
            เรียงตาม
          </label>

          <select
            id="sortBy"
            {...register("sortBy")}
          >
            {SORT_FIELDS.map((field) => (
              <option
                key={field}
                value={field}
              >
                {field}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">
          ค้นหา
        </button>

        <button
          type="button"
          onClick={clearSearch}
        >
          ล้าง
        </button>
      </form>
    </section>
  );
}
