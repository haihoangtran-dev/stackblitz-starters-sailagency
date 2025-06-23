import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-gradient-to-br from-navy-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-navy-900 leading-tight">
                Đăng ký LLC dễ dàng 
                <span className="text-navy-600"> chỉ trong vài bước</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Khởi nghiệp tại Mỹ một cách chuyên nghiệp với dịch vụ đăng ký LLC nhanh chóng, 
                minh bạch và được hỗ trợ pháp lý đầy đủ.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                'Hoàn thành trong 3-5 ngày làm việc',
                'Hỗ trợ pháp lý chuyên nghiệp 24/7',
                'Giá cả minh bạch, không phí ẩn'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>Bắt đầu ngay</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Xem bảng giá
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Được tin tưởng bởi hơn 1,000+ doanh nghiệp</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-gray-400">500+</div>
                <div className="text-2xl font-bold text-gray-400">LLC</div>
                <div className="text-2xl font-bold text-gray-400">CORP</div>
                <div className="text-2xl font-bold text-gray-400">INC</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-navy-200 rounded w-2/3"></div>
                  
                  <div className="bg-navy-50 rounded-lg p-4 space-y-3">
                    <div className="h-3 bg-navy-200 rounded w-full"></div>
                    <div className="h-3 bg-navy-200 rounded w-4/5"></div>
                    <div className="h-3 bg-navy-200 rounded w-3/5"></div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <div className="h-8 bg-navy-600 rounded w-24"></div>
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-navy-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-navy-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero