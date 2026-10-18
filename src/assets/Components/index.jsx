import "./HomeForm.css"
const HomeForm=()=> {
    return(
        <main className="home-form">
        <form>
            <h2>Personal info</h2>
            <span>Please provide name,email address,and phone number.</span>
            <p>Name</p>
            <input type="text" placeholder="e.g.Stephenking"/>
            <p>Email Address</p>
            <input type="email" placeholder="e.g.Stephenking@lorem.come"/>
            <p>Phone Number</p>
            <input type="number" placeholder="e.g.+1234567890"/>
            <button type="button">Next Step</button>
            
        </form>

        </main>
    )
}
export default HomeForm
  
        

    
