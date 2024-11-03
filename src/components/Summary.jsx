const Summary = () => {
  return (
    <div className="p-4 max-w-xs mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between text-gray-700">
        <span className="font-medium">Subtotal</span>
        <span className="font-medium">$237.99</span>
      </div>
      <div className="flex justify-between text-gray-700 mt-2">
        <span className="font-medium">Discount</span>
        <span className="font-medium text-red-500">-$30.00</span>
      </div>
    </div>
  );
};

export default Summary;
