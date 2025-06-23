import React from 'react'
import { Clock, Shield, DollarSign, Users, FileText, Headphones } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Nhanh chóng',
      description: 'Hoàn thành đăng ký LLC trong 3-5 ngày làm việc, nhanh nhất thị trường'
    },
    {
      icon: Shield,
      title: 'Hỗ trợ pháp lý',
      description: 'Đội ngũ luật sư chuyên nghiệp hỗ trợ 24/7 trong suốt quá trình'
    },
    {
      icon: DollarSign,
      title: 'Giá minh bạch',
      description: 'Không có phí ẩn, mọi chi phí được công khai rõ ràng từ đầu'
    },
    {
      icon: Users,
      title: 'Kinh nghiệm',
      description: 'Hơn 5 năm kinh nghiệm với 1,000+ LLC được đăng ký thành công'
    },
    {
      icon: FileText,
      title: 'Tài liệu đầy đủ',
      description: 'Cung cấp đầy đủ tài liệu pháp lý và hướng dẫn vận hành LLC'
    },
    {
      icon: Headphones,
      title: 'Hỗ trợ sau bán',
      description: 'Tư vấn và hỗ trợ miễn phí trong 12 tháng sau khi hoàn thành'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Tại sao chọn SailAgency?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cam kết mang đến dịch vụ đăng ký LLC chuyên nghiệp nhất 
            với quy trình tối ưu và hỗ trợ toàn diện
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border border-gray-200 hover:border-navy-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy-600 transition-colors">
                <benefit.icon className="w-6 h-6 text-navy-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits