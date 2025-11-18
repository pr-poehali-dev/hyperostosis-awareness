import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useRef } from "react";
import html2canvas from "html2canvas";

const Index = () => {
  const infographicRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (infographicRef.current) {
      const canvas = await html2canvas(infographicRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
      });
      const link = document.createElement("a");
      link.download = "hyperostosis-infographic.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const causes = [
    {
      icon: "Dna",
      title: "Генетическая предрасположенность",
      description: "Мутации генов ANKH, COL1A1, наследственные синдромы",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: "Activity",
      title: "Метаболические нарушения",
      description: "Гиперкальциемия, гипервитаминоз D, гипопаратиреоз",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: "Flame",
      title: "Воспалительные процессы",
      description: "Хронический остеомиелит, спондилоартропатии",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: "Zap",
      title: "Эндокринопатии",
      description: "Акромегалия, гипотиреоз, синдром Иценко-Кушинга",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: "AlertCircle",
      title: "Неопластические процессы",
      description: "Остеосаркома, хондросаркома, метастатическое поражение",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: "Pill",
      title: "Ятрогенные факторы",
      description: "Длительный приём ретиноидов, фторидов",
      color: "bg-accent/10 text-accent",
    },
  ];

  const riskFactors = [
    {
      icon: "Users",
      title: "Возраст >50 лет",
      description: "Возрастная остеодистрофия",
      severity: "high",
    },
    {
      icon: "User",
      title: "Мужской пол",
      description: "Преобладание в 3:1",
      severity: "medium",
    },
    {
      icon: "Weight",
      title: "Ожирение (ИМТ >30)",
      description: "Метаболическая перегрузка",
      severity: "high",
    },
    {
      icon: "BicepsFlexed",
      title: "Микротравматизация",
      description: "Профессиональные нагрузки",
      severity: "medium",
    },
    {
      icon: "TestTube",
      title: "Коморбидные состояния",
      description: "Сахарный диабет 2 типа, подагра",
      severity: "high",
    },
    {
      icon: "Radiation",
      title: "Лучевая терапия",
      description: "Постлучевой остеонекроз",
      severity: "medium",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Гиперостоз: Клинические аспекты
            </h1>
            <p className="text-muted-foreground">
              Памятка для медицинских специалистов
            </p>
          </div>
          <Button onClick={handleExport} className="gap-2">
            <Icon name="Download" size={18} />
            Экспорт PNG
          </Button>
        </div>

        <div ref={infographicRef} className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-8">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                  <Icon name="Info" size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold">Гиперостоз</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Патологическое состояние, характеризующееся избыточным формированием костной ткани с утолщением кортикального слоя и/или увеличением костной массы
              </p>
            </div>
            <img 
              src="https://cdn.poehali.dev/projects/407198e9-66d8-4598-a0ea-6e5c92ecf54b/files/1a3ca89c-b4d1-489c-8369-b20f81117269.jpg"
              alt="Medical background"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Stethoscope" size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Этиологические факторы</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {causes.map((cause, index) => (
                <Card
                  key={index}
                  className={`p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${cause.color.includes('primary') ? 'hover:border-primary' : cause.color.includes('secondary') ? 'hover:border-secondary' : 'hover:border-accent'}`}
                >
                  <div className={`h-14 w-14 rounded-xl ${cause.color} flex items-center justify-center mb-4`}>
                    <Icon name={cause.icon as any} size={28} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 leading-tight">
                    {cause.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cause.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <Icon name="AlertTriangle" size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Факторы риска</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {riskFactors.map((factor, index) => (
                <Card
                  key={index}
                  className={`p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${
                    factor.severity === "high"
                      ? "border-l-4 border-l-secondary hover:border-secondary"
                      : "border-l-4 border-l-accent hover:border-accent"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      factor.severity === "high" 
                        ? "bg-secondary/10 text-secondary" 
                        : "bg-accent/10 text-accent"
                    }`}>
                      <Icon name={factor.icon as any} size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-base leading-tight">
                          {factor.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      factor.severity === "high"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-accent/10 text-accent"
                    }`}>
                      {factor.severity === "high" ? "Высокий риск" : "Средний риск"}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20 p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Клиническая значимость</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ранняя диагностика гиперостоза требует комплексного подхода: рентгенография, КТ, МРТ, лабораторная диагностика (щелочная фосфатаза, маркеры костного метаболизма). Дифференциальная диагностика включает болезнь Педжета, остеопойкилоз, эностоз.
                </p>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              © 2024 Медицинская памятка для специалистов
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('ru-RU')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
