import SideNav from './SideNav'
import { breakpoints } from '../utils/consts'
import { useViewport } from 'hooks/useViewport'
import BottomBar from './mobile/BottomBar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  ChevronRightIcon,
} from '@heroicons/react/solid'

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { width } = useViewport()
  const isMobile = width ? width < breakpoints.sm : false
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    const collapsed = width ? width <= breakpoints.xl : false
    setIsCollapsed(collapsed)
  }, [])

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 100)
  }

  return (
    <div className={`flex-grow bg-th-bkg-1 text-th-fgd-1 transition-all`}>
      <div className="flex">
        {isMobile ? (
          <div className="fixed bottom-0 left-0 z-20 w-full md:hidden">
            <BottomBar />
          </div>
        ) : (
          <div className={isCollapsed ? 'mr-[64px]' : 'mr-[220px]'}>
            <div className={`fixed z-20 h-screen`}>
              <button
                className="absolute -right-4 top-1/2 z-20 h-10 w-4 -translate-y-1/2 transform rounded-none rounded-r bg-th-bkg-4 focus:outline-none"
                onClick={handleToggleSidebar}
              >
                <ChevronRightIcon
                  className={`default-transition h-full w-full ${
                    !isCollapsed ? 'rotate-180' : 'rotate-360'
                  }`}
                />
              </button>
              <div
                className={`h-full ${!isCollapsed ? 'overflow-y-auto' : ''}`}
              >
                <SideNav collapsed={isCollapsed} />
              </div>
            </div>
          </div>
        )}
        <div className="w-full overflow-hidden">
          {/*<GlobalNotification />*/}
          <TopBar />
          <div className={pathname === '/' ? 'px-3' : 'px-6 pb-16 md:pb-6'}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

const TopBar = () => {
  // const { t } = useTranslation(['common', 'delegate'])

  // const [showSettingsModal, setShowSettingsModal] = useState(false)
  // const [showDepositModal, setShowDepositModal] = useState(false)
  // const [showWithdrawModal, setShowWithdrawModal] = useState(false)

  return (
    <>
      <div className="flex h-14 items-center justify-between border-b border-th-bkg-3 bg-th-bkg-1 px-6">
        {/*{mangoAccount && mangoAccount.beingLiquidated ? (*/}
        {/*  <div className="flex items-center justify-center">*/}
        {/*    <ExclamationCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-th-red" />*/}
        {/*    <span className="text-th-red">{t('being-liquidated')}</span>*/}
        {/*  </div>*/}
        {/*) : (*/}
          <div className="flex items-center text-th-fgd-3">👋 Welcome</div>
        {/*)}*/}
        <div className="flex items-center space-x-4">
          {/*<IconButton*/}
          {/*  className="h-8 w-8"*/}
          {/*  onClick={() => setShowSettingsModal(true)}*/}
          {/*>*/}
          {/*  <CogIcon className="h-5 w-5" />*/}
          {/*</IconButton>*/}
        </div>
      </div>
      {/*{showSettingsModal ? (*/}
      {/*  <SettingsModal*/}
      {/*    onClose={() => setShowSettingsModal(false)}*/}
      {/*    isOpen={showSettingsModal}*/}
      {/*  />*/}
      {/*) : null}*/}
      {/*{showDepositModal ? (*/}
      {/*  <DepositModal*/}
      {/*    isOpen={showDepositModal}*/}
      {/*    onClose={() => setShowDepositModal(false)}*/}
      {/*  />*/}
      {/*) : null}*/}
    </>
  )
}

export default Layout
