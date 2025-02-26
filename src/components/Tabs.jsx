export default function Tabs({ children, buttons, tabType = "menu" }) {
  //NOTE: Must be upper case here. This will handle strings or actual components passed in as children
  const TabType = tabType;

  return (
    <>
      <TabType>{buttons}</TabType>
      {children}
    </>
  );
}
