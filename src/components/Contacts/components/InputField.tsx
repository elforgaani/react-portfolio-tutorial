const InputField = ({ label }: { label: string }) => {
    return (
        <div className="col-md-12">
            <div className="input text-center d-flex justify-content-center align-items-center">
                <input type="text" placeholder={label} className="w-50 my-3 form-control border-0 border-bottom py-3 position-relative" />
            </div>
        </div>
    );
}
export default InputField;