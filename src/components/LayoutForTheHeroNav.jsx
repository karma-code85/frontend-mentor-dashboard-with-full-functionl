export default function LayoutHeroNav({path,tagsone, tagstwo,tagsthree}){
  return(
    <div className="border-b border-t bg-gray-50 w-full p-3 container-full">
      <span className=" p-4 ml-2 border-l border-r text-xl">{path}</span>
      <span className=" p-2 w-full ">{tagsone}     {tagstwo}     {tagsthree}</span>

    </div>
  )
}