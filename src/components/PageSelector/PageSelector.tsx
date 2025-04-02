import { useState, useCallback } from 'react';
import { Button } from '@/ui';
import SinglePageSelector from './SinglePageSelector';

type StateKeyType = 'all' | 'Page1' | 'Page2' | 'Page3' | 'Page4';

enum Page {
  Page1 = 'Page 1',
  Page2 = 'Page 2',
  Page3 = 'Page 3',
  Page4 = 'Page 4',
}

const initialState = { all: false } as Record<StateKeyType, boolean>;

for (const key of Object.keys(Page) as Array<keyof typeof Page>) {
  initialState[key as StateKeyType] = false;
}

const PageSelector = () => {
  console.log(initialState);
  const [selectPage, setSelectPage] = useState<Record<StateKeyType, boolean>>(initialState);

  const toggleAllPagesState = useCallback(() => {
    const newState = { all: !selectPage.all } as Record<StateKeyType, boolean>;
    Object.keys(Page).forEach((key) => {
      newState[key as StateKeyType] = !selectPage.all;
    });
    setSelectPage(newState);
  }, [selectPage.all]);

  const togglePageState = useCallback(
    (key: StateKeyType) => {
      const newState = { ...selectPage, [key]: !selectPage[key] };

      let isAllTrue = true;

      Object.keys(Page).forEach((key) => {
        if (!newState[key as StateKeyType]) {
          isAllTrue = false;
        }
      });

      if (isAllTrue) {
        newState.all = true;
      } else {
        newState.all = false;
      }

      setSelectPage(newState);
    },
    [selectPage],
  );

  const submitBtnHandler = useCallback(() => {
    if (selectPage.all) {
      alert('All pages selected');
    } else {
      const selectedPages = Object.entries(selectPage).reduce((acc, [key, value]) => {
        if (key !== 'all' && value) {
          acc.push(Page[key as keyof typeof Page]);
        }
        return acc;
      }, [] as string[]);

      if (selectedPages.length > 0) {
        alert(`Selected pages: ${selectedPages.join(', ')}`);
      } else {
        alert('No pages selected');
      }
    }
  }, [selectPage]);

  return (
    <section className="page-selector-container">
      <div className="page-selector-all-container">
        <SinglePageSelector state={selectPage.all} toggoleState={toggleAllPagesState}>
          All pages
        </SinglePageSelector>
      </div>
      <div className="page-selector-options-container">
        {Object.entries(Page).map(([key, value]) => (
          <SinglePageSelector
            key={key}
            state={selectPage[key as StateKeyType]}
            toggoleState={() => {
              togglePageState(key as StateKeyType);
            }}
          >
            {value}
          </SinglePageSelector>
        ))}
      </div>
      <div className="page-selector-submit-btn-container">
        <Button className="font-montserrat-normal page-selector-submit-btn" onClick={submitBtnHandler}>
          Done
        </Button>
      </div>
    </section>
  );
};

export default PageSelector;
