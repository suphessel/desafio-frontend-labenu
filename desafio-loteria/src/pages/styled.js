import styled from "styled-components";

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: pink;
`;

export const ContainerLotery = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
  background-color: #6befa3;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  align-content: center;
  text-align: center; ;
`;

export const SelectLotery = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  background-color: #6befa3;
  justify-items: center;
  align-items: center;
  align-content: center;
  text-align: center;
  padding-top: 35%;

  select {
    width: 100%;
    padding: 5%;
    text-align: center;
    border-radius: 10px;
    border: solid 1px white;
    font-size: 16px;
    color: #848484;
  }
`;
export const BoxContest = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #6befa3;
  color: white;
  font-weight: bold;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  text-align: center;
  padding-bottom: 10%;
`;

export const ContainerResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  background-color: #6befa3; ;
`;

export const BoxResult = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee9e9;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  align-items: flex-end;
  text-align: flex-end;
`;
export const DivResult = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
  background-color: #eee9e9;
  width: 100%;
  height: 50%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  text-align: center;
`;

export const DivNumber = styled.div`
  display: flex;
  width: 8%;
  height: 20%;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 60%;
  /* border: solid 5px #cdc9c9; */
  color: #333333;
  font-size: 27px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 30%;
  background-color: #eee9e9;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  text-align: center;

  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 12px;

    color: #333333;
  }
`;
