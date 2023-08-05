import React, { useContext } from 'react'
import TestChart from "../components/TestChart"
import CalendarChart from "../components/CalendarChart"
import { DBContext } from '../contexts/db_context'
import { v4 as uuid } from 'uuid';

function Test() {
  const {readEntriesFromDB, writeJournalEntry} = useContext(DBContext);
  
  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={readEntriesFromDB}>
        CALL FIREBASE
      </button> <br /> <br />
      <button onClick={() => {
        writeJournalEntry(new Date(), uuid(), 2, 'this is a test', 'soli-baby')
      }}>SEND DATA TO FIREBASE</button>
      <TestChart />
      <CalendarChart />
    </div>
  )
}

export default Test