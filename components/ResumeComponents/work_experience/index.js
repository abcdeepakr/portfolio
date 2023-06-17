import styles from './index.module.css'

export function WorkExperience(){
    return (
        <div>
            <p className={styles.heading}>Work Experience</p>
            <div>
                <div className={styles.company_details}>
                    <p className={styles.companyName}>Cars24 - Software Developer</p>
                    <p className={styles.duration}>Apr 2023-Present</p>
                </div>
                <div className={styles.contribution}>
                    <ul>
                        <li>Joined as a Frontend Developer (React)</li>
                        <li>Working on monorepo architecture with Nx</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className={styles.company_details}>
                    <p className={styles.companyName}>The Peripheral Store - Software Developer</p>
                    <p className={styles.duration}>Jul 2021-Apr 2023</p>
                </div>
                <div className={styles.contribution}>
                    <ul>
                        <li>Created Internal Applications to improve logistics operations.</li>
                        <li>Worked on <a className={styles.link} target="_blank" rel="noreferrer" href='https://tpstech.in'>tpstech.in</a> portal to create new features like order cancellation, order tracking, pincode servicability etc...</li>
                        <li>Wrote backend APIs to enable several functionalities on internal as well as public portals.</li>
                        <li>Used Shopify Liquid extensively to enable multiple features on the <a className={styles.link} target="_blank" rel="noreferrer" href='https://tpstech.in'>tpstech.in</a> portal.</li>
                        <li>Wrote internal tools in NextJs which performed a lot of data heavy tasks utilizing multiple third party APIs.</li>
                        <li>Wrote multiple Cron Jobs to enable the data sync across different services.</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className={styles.company_details}>
                    <p className={styles.companyName}>LimeTray - Operations Intern</p>
                    <p className={styles.duration}>Jul 2020 - Sept 2020</p>
                </div>
                <div className={styles.contribution}>
                    <ul>
                        <li>Wrote SQL queries to perform CRUD operations on customer and merchant order details</li>
                        <li>Integrated Payment Gateways like Paypal, Razorpay, PayU on mechant websites</li>
                        <li>Analyzing and reporting RCA of different issues related to payment, orders and internal APIs</li>
                    </ul>
                </div>

            </div>
            <div>
                <div className={styles.company_details}>
                    <p className={styles.companyName}>Ugam Solutions - Associate Data Analyst</p>
                    <p className={styles.duration}>Sept-2018-Sept2019</p>
                </div>
                <div className={styles.contribution}>
                    <ul>
                        <li>Analyzing Survey Data to improve business decisions</li>
                        <li>Worked on multiple projects related to optimization of business implementations based on customer reviews.</li>
                        <li>Worked with internal tools to perform data coding on clients application reviews</li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}