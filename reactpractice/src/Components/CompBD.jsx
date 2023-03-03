import CompB from './CompB'
let CompA = () => {
    let name = "ravi"
    let avail = "true"
    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB ename={name} esal={45000} avail={avail} />
    </div>
}
export default CompA