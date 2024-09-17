import { cn } from "@/lib/utils";
import React from "react";
import { Title, FilterCheckbox, RangeSlider } from "./index";
import { Input } from "../ui/index";
import { CheckboxFilterGroup } from "./checkbox-filter-group";

interface Props {
  className?: string;
}

const MIN_COST = 0;
const MAX_COST = 2000;
const STEP_COST = 10;

export const Filter: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* TopCheckBox */}

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* CostFilter */}

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={MIN_COST}
            max={MAX_COST}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="2000"
            min={MIN_COST}
            max={MAX_COST}
          />
        </div>

        <RangeSlider
          min={MIN_COST}
          max={MAX_COST}
          step={STEP_COST}
          value={[MIN_COST, MAX_COST]}
        />
      </div>

      {/* ingredientsFilter */}

      <CheckboxFilterGroup
        title="Ингидиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "сыр", value: "1" },
          { text: "тесто", value: "2" },
          { text: "мясо", value: "3" },
          
        ]}
        items={[
          { text: "сыр", value: "1" },
          { text: "тесто", value: "2" },
          { text: "мясо", value: "3" },
          { text: "сыр", value: "4" },
          { text: "тесто", value: "5" },
          { text: "мясо", value: "6" },
          { text: "сыр", value: "7" },
          { text: "тесто", value: "8" },
          { text: "мясо", value: "9" },
        ]}
      />

      <CheckboxFilterGroup
        title="Тип теста"
        limit={2}
        className="mt-8"
        defaultItems={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" }
        ]}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" }
        ]}
      />

      
    </div>
  );
};
