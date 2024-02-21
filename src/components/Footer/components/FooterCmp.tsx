const FooterCmp = (props: any) => {
    console.log(props.title);
    return (
        <div className="col-md-4">
            <div className="text-center py-5"><h3>{props.title}</h3>
                <p>{props.description}</p></div>
        </div>
    )
}
export default FooterCmp;