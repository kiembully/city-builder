import Controls from "../components/Controls";

const SideBar = () => {
  return (
    <div className='w-full lg:w-1/4 h-svh0 p-4'>
      <div className='controller-wrap'>
        <Controls />
      </div>
    </div>
  );
}

export default SideBar;