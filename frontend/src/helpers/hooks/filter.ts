import React from "react";

// To use this hook we must do like this:
//
// const data = useFilter({
//     dataArray: myData,
//     searchVal: val
//     searchKey: key,
// })
//
// the obtained data as result is the filtered data of dataArray

// Interface of props of the function
interface IProps {
  dataArray: any;
  searchVal?: string;
  searchKey: string;
}

// Definition of hook which help us to filter an array
export const useFilterArrayOfObject = (props: IProps) => {
  const dataArray = props.dataArray;
  const searchVal = props.searchVal;
  const searchKey = props.searchKey;

  if (searchVal == "") {
    return dataArray;
  } else {
    const filteredResult = dataArray.filter((item: {}) =>
      // To filter each item in the form {"name":"...", "category":"...", ...},
      // we retrieve the value of searchkey (for example item["name"]) and
      // check if the searchVal is included in.
      item[searchKey].toLowerCase().includes(searchVal.toLowerCase())
    );

    // We check if the filtered result array is empty or not.
    if (filteredResult.length > 0) {
      return filteredResult;
    } else {
      return [];
    }
  }
};
