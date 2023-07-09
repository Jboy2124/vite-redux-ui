import React, { useEffect, useState } from "react";
import {
  useGetTotalCountQuery,
  useGetAccountsQuery,
} from "../../handlers/account-handler";
import PaginateBottom from "../pagination/PaginateBottom";
import AccountInfoCard from "../cards/account-info/AccountInfoCard";

const Schedule = () => {
  const [pageNo, setPageNo] = useState(0);
  const { data = [] } = useGetTotalCountQuery();
  const { data: accounts = [] } = useGetAccountsQuery(pageNo);

  function handleSelectedPage(event) {
    setPageNo(event.selected);
  }

  return (
    <main className="min-h-screen bg-green-200 flex flex-col">
      <p>Schedule</p>
      <section className="min-h-50vh h-[50vh] flex justify-center items-center my-10">
        <div className="grid grid-cols-3 gap-3 place-items-center">
          {accounts.map((info, index) => {
            return (
              <AccountInfoCard
                key={index}
                title={info?.title}
                fname={info?.fname}
                lname={info?.lname}
              />
            );
          })}
        </div>
      </section>
      <div className="mt-20">
        <PaginateBottom
          total={isNaN(data) ? 0 : data}
          handlePageChange={handleSelectedPage}
        />
      </div>
    </main>
  );
};

export default Schedule;
