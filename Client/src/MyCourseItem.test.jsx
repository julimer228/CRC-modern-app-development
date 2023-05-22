import { render, screen} from '@testing-library/react';
import { expect, afterEach, describe, expectTypeOf, assertType, assert } from 'vitest';
import MyCourseItem from "./components/my-course-item/MyCourseItem"

describe('MyCourseItem tests', () => {
    it('it tests MyCourseItem', () => {


      let testCourseData = {
        title:"Test title",
        date: "",
        duration:"",
        price:"22",
        teacher:"Test teacher",
        language:"Polish",
        img:"test url"
    }

      render(<MyCourseItem myCourse={testCourseData}/>);
      screen.debug();
    });
  });