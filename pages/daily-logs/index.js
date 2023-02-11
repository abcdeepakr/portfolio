import {
  Separator,
  TimelineItem,
  TimelineItemBody,
  TimelineItemContent,
  TimelineItemDate,
  TimelineItemTitle,
} from "@deepakr-28/boring-component-library";

import styles from './logs.module.css'

import logs from '../../assets/data/dailylogs.json'
const DailyLogs = () => {
  return (
    <div className={styles.centerTimeline}>
      
        
        {logs.map(log =>{
          return(
            <>
            <TimelineItem >
            <TimelineItemDate>{log.date}</TimelineItemDate>
            <Separator />
            <TimelineItemContent>
              <TimelineItemTitle>
                {log.title}
              </TimelineItemTitle>
              <TimelineItemBody>
                {log.content}
              </TimelineItemBody>
            </TimelineItemContent>
            </TimelineItem>
            </>
          )
        })}
    </div>
  )
}

module.exports = DailyLogs