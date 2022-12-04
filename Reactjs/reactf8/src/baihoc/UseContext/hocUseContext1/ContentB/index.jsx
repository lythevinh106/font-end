import ContentC from "../ContentC";


function ContentB({ theme }) {

    //////đây là trung gian: nhưng nó dư thừa 
    return (

        <div className={theme}>

            <ContentC theme={theme} />

        </div>
    )
}

export default ContentB;