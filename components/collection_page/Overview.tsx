
import styles from './Collection.module.css';

function Overview() {

  return <div className="overview-container">
    <div className={styles.title}>
      Solana NFT market overview
    </div>
    <div className="my-4 text-gray-500 dark:text-gray-300">
      <p>
        The home of Solana NFTs. Find the top and most popular NFT collections
        and analyze the current state and growth over time.
      </p>
    </div>

    <div className="flex items-center pb-3">
      <div className={styles.panel}>
        <h3 className={styles.panel__title}>
          1H Volume
        </h3>
        <div className="panel__content">
          <p className="md:text-lg xl:text-2xl font-semibold">
            <span className="flex flex-col"><span>
              1,311,744&nbsp;SOL
              <em className="
                list-bottom
                text-gray-600
                not-italic
                text-xs
                font-normal
                dark:text-white
              ">($19,033,408)</em> 
            </span> </span>
          </p> 
          <p className="hidden md:block md:mt-4 uppercase text-xs text-gray-500">
            SF Collections:<br /> 
            <strong>
              <span>
                <span>1,050,489&nbsp;SOL
                <em className="
                  list-bottom
                  text-gray-600
                  not-italic
                  text-xs
                  font-normal
                  dark:text-white
                ">($15,242,589)
                </em> 
                </span>
              </span>
            </strong>
          </p>
        </div>
      </div>
      <div className={styles.panel}>
        <h3 className={styles.panel__title}>
          24H Volume
        </h3>
        <div className="panel__content">
          <p className="md:text-lg xl:text-2xl font-semibold">
            <span className="flex flex-col"><span>
              1,311,744&nbsp;SOL
              <em className="
                list-bottom
                text-gray-600
                not-italic
                text-xs
                font-normal
                dark:text-white
              ">($19,033,408)</em> 
            </span> </span>
          </p> 
          <p className="hidden md:block md:mt-4 uppercase text-xs text-gray-500">
            SF Collections:<br /> 
            <strong>
              <span>
                <span>1,050,489&nbsp;SOL
                <em className="
                  list-bottom
                  text-gray-600
                  not-italic
                  text-xs
                  font-normal
                  dark:text-white
                ">($15,242,589)
                </em> 
                </span>
              </span>
            </strong>
          </p>
        </div>
      </div>
      <div className={styles.panel}>
        <h3 className={styles.panel__title}>
          7D Volume
        </h3>
        <div className="panel__content">
          <p className="md:text-lg xl:text-2xl font-semibold">
            <span className="flex flex-col"><span>
              1,311,744&nbsp;SOL
              <em className="
                list-bottom
                text-gray-600
                not-italic
                text-xs
                font-normal
                dark:text-white
              ">($19,033,408)</em> 
            </span> </span>
          </p> 
          <p className="hidden md:block md:mt-4 uppercase text-xs text-gray-500">
            SF Collections:<br /> 
            <strong>
              <span>
                <span>1,050,489&nbsp;SOL
                <em className="
                  list-bottom
                  text-gray-600
                  not-italic
                  text-xs
                  font-normal
                  dark:text-white
                ">($15,242,589)
                </em> 
                </span>
              </span>
            </strong>
          </p>
        </div>
      </div>
    </div>

  </div>
}

export default Overview;
