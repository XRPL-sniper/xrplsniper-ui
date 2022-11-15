import React, { useState } from 'react';
import ButtonGroup from '../ButtonGroup';

function TopAndPopular() {
  const [activeTime, setActiveTime] = useState<string | undefined>('24H');
  return <div>
    <div>
      <div className="h-16">
        <div className="lg:flex lg:justify-between">
          <h2 className="panel__title">
            Top Collections
          </h2>
          <div className="button-group">
            <ButtonGroup
              activeValue={activeTime || ''}
              onChange={(p) => setActiveTime(p)}
              values={['Total Floor Value', 'Volume', '90D', 'ALL']}
            />
          </div>
        </div>
      </div>
      <ul>
        <li className="flex space-x-2 mt-4">
          <div className="flex-1 flex space-x-2">
            <a href="/nft/degods" className="">
              <img src="https://solanafloor.ams3.cdn.digitaloceanspaces.com/collections/degods.jpg" className="h-16 w-16 rounded-full" />
            </a>
            <div>
              <div className="text-sm">
                <a href="/nft/degods" className="">DeGods</a>
              </div>
              <div className="text-xs text-gray-500 uppercase">
                Floor price:
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">
                  <span>215.00&nbsp;SOL
                    <em className="
                  list-bottom
                  text-gray-600
                  not-italic
                  text-xs
                  font-normal
                  dark:text-white
                ">($3,154)</em>
                  </span>
                </span>
                <div className="text-sm">
                  <span className="percentage-change -style1 -positive">
                    +10%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-right"><span>$31,543,654.05</span>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <div className="h-16">
        <div className="lg:flex lg:justify-between">
          <h2 className="panel__title">
            Popular Collections
          </h2>
        </div>
      </div>
      <ul>
        <li
          className="flex space-x-2 mt-4">
          <div className="flex-1 flex space-x-2">
            <img src="https://nftstorage.link/ipfs/bafybeiea3gkayiggbdehdnzgxcf2j343cxdlho6avwuxnsyprwuph5lepi/241.png" className="h-16 w-16 rounded-full" />
            <div>
              <div className="text-sm">MMA8</div>
              <div className="text-sm uppercase text-gray-500">
                1,425 sales
              </div>
            </div>
          </div>
          <span className="w-24 text-sm text-right">
            <span>70.88&nbsp;SOL<div className="list-bottom text-gray-600 not-italic text-xs font-normal dark:text-white">
              $1,036
            </div>
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
}

export default TopAndPopular;
