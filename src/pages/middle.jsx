function Middle(props){
    const jobHub = props.job
    console.log(jobHub)
    
    return <div>
        <div className=' w-full h-[80px] flex items-center pl-[80px]'>
            <h1 className='text-[30px]'>Recommended Jobs</h1>
        </div>
        <div>
            {jobHub.map(function(elem){
                return <div>
                    <h1>{elem.jobTitle}</h1>
                </div>
            })}
        </div>

    </div>
}
export default Middle