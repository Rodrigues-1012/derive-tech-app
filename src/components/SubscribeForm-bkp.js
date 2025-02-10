
import { fetchApi } from "@/services/api";

const SubscribeForm = ({heading = "", theme}) => {

    return (
        <div className={theme === "light" ? "subscribe subscribe--light" : "subscribe"} >
            <div className="row justify-content-center">
                <div className="col-sm-7 col-md-6 col-lg-5 col-xl-4">
                    <div className="subscribe-inner">
                        <h3 className="wow flipInX">{heading}</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()

                                fetchApi("subscribers", { email: e.target[0].value }, {}, true, "post")
                                    .then((response) => {
                                        console.log('response', response)
                                        if (response.status == 200) {
                                            alert(response.data.data);
                                        } 
                                    })
                                    .catch((err) => {
                                        console.log("err", err);
                                    });

                            }}
                        >

                            <div className="form wow flipInX">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email Address"
                                        required
                                    />
                                    <button type="submit" className="sbm">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeForm