import { useEffect, useState } from "react";

const userData = [
  {
    id: 1111,
    status: "todo",
    title: "공부하기"
  },
  {
    id: 2222,
    status: "todo",
    title: "스터디준비"
  },
  {
    id: 3333,
    status: "todo",
    title: "알고리즘공부"
  },
  {
    id: 4444,
    status: "todo",
    title: "컴퓨터게임"
  }
];

const useFetch = (callback: any): boolean => {
  const [loading, setLoading] = useState();

  const fetchInitialData = () => {
    setLoading(true);
    callback(userData);
    setLoading(false);
  };
  
  // 배열 초기값 설정시 한번만 실행 즉, 로딩시 한번만 실행
  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
};

export default useFetch;
