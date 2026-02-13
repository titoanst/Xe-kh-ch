import React from 'react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Kinh nghiệm du lịch Chợ Nổi Cái Răng tự túc từ A-Z',
    category: 'Cẩm nang',
    date: '15 Th3, 2024',
    excerpt: 'Hướng dẫn chi tiết cách thuê tàu, thời điểm đi đẹp nhất và những món ăn không thể bỏ qua trên chợ nổi.'
  },
  {
    id: 2,
    title: 'Top 5 món đặc sản Sóc Trăng làm quà biếu ý nghĩa',
    category: 'Ẩm thực',
    date: '10 Th3, 2024',
    excerpt: 'Bánh Pía, lạp xưởng, hay mè láo? Cùng khám phá những thức quà đậm chất miền Tây.'
  },
  {
    id: 3,
    title: 'Lịch trình khám phá Bạc Liêu - Cà Mau 2 ngày 1 đêm',
    category: 'Lịch trình',
    date: '05 Th3, 2024',
    excerpt: 'Gợi ý lịch trình di chuyển tối ưu, tiết kiệm thời gian và chi phí cho gia đình.'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
                <span className="text-gold uppercase tracking-widest text-sm font-bold mb-3 block">Góc chia sẻ</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
                    Cẩm Nang <br/> & Tin Tức
                </h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-primary-900 font-bold uppercase tracking-widest hover:text-gold transition-colors group">
                Xem tất cả bài viết
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
                <article key={post.id} className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                    {/* Top Decorative Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-900 to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                    <div className="flex justify-between items-center mb-6">
                        <span className="bg-primary-50 text-primary-800 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-primary-100 group-hover:bg-primary-900 group-hover:text-gold transition-colors">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                        </div>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-primary-900 mb-4 leading-snug group-hover:text-gold transition-colors">
                        <a href="#" className="before:absolute before:inset-0 focus:outline-none">{post.title}</a>
                    </h3>
                    
                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                        {post.excerpt}
                    </p>
                    
                    <div className="pt-6 border-t border-gray-100 mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 text-primary-900 font-bold text-xs uppercase tracking-wider group-hover:text-gold transition-colors">
                            Đọc chi tiết <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                        <Newspaper size={20} className="text-gray-200 group-hover:text-gold/20 transition-colors" />
                    </div>
                </article>
            ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-primary-900 font-bold uppercase tracking-widest hover:text-gold transition-colors">
                Xem tất cả bài viết
                <ArrowRight size={20} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;