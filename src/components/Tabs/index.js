const Tabs = props => {
  const {eachTab, changeTab} = props
  const {tabId, displayText} = eachTab
  const onClickTabItem = () => {
    changeTab(tabId)
  }
  return (
    <li>
      <button type="button" className="tab-button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
