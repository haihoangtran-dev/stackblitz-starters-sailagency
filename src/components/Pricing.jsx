import React from 'react'
import { Check, Star } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Cơ bản',
      price: '$199',
      description: 'Phù hợp cho startup và doanh nghiệp nhỏ',
      features: [
        'Đăng ký LLC tại bang bạn chọn',
        'Certificate of Formation',
        'Registered Agent (1 năm)',
        'Hỗ trợ email cơ bản',
        'Hướng dẫn vận hành LLC'
      ],
      popular: false
    },
    {
      name: 'Chuyên nghiệp',
      price: '$399',
      description: 'Lựa chọn phổ biến cho doanh nghiệp phát triển',
      features: [
        'Tất cả tính năng gói Cơ bản',
        'Operating Agreement tùy chỉnh',
        'EIN Number (Mã số thuế)',
        'Tư vấn pháp lý 1-1',
        'Hỗ trợ điện thoại ưu tiên',
        'Banking Resolution',
        'Hỗ trợ mở tài khoản ngân hàng'
      ],
      popular: true
    },
    {
      name: 'Doanh nghiệp',
      price: '$699',
      description: 'Giải pháp toàn diện cho doanh nghiệp lớn',
      features: [
        'Tất cả tính năng gói Chuyên nghiệp',
        'Trademark Search & Filing',
        'Compliance Calendar',
        'Annual Report Filing',
        'Tư vấn thuế chuyên sâu',
        'Hỗ trợ 24/7 dedicated',
        'Legal Document Templates',
        'Business License Research'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Bảng giá minh bạch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn gói dịch vụ phù hợp với nhu cầu và quy mô doanh nghiệp của bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-navy-600 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-navy-200 hover:shadow-lg'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-navy-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Phổ biến nhất</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-navy-600">{plan.price}</span>
                  <span className="text-gray-500 ml-2">một lần</span>
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-navy-600 hover:bg-navy-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                Chọn gói {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-xl">
          <p className="text-gray-600 mb-2">
            <strong>Cam kết:</strong> Hoàn tiền 100% nếu không hài lòng trong 30 ngày
          </p>
          <p className="text-sm text-gray-500">
            Tất cả gói đều bao gồm phí bang (State Fee) và không có phí ẩn
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing