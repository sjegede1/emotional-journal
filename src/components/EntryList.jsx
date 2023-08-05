import React, { useContext, useEffect, useState } from "react";
import entries from "../models/entries";
import Entry from "./Entry";
import { DBContext } from "../contexts/db_context";
import EntryForm from "../pages/EntryForm";
import { Link } from "react-router-dom";

function EntryList() {
  let { dbData, readEntriesFromDB, moods, activities } = useContext(DBContext);

  return (
    <div className="entry-list">
      {dbData.map((entry) => {
        return <Entry data={entry} moods={moods} activities={activities} key={entry.entryid} />;
      })}
    </div>
  );
}

export default EntryList;
