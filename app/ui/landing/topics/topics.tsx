import { fetchTopicsSummary } from "../../../lib/data/data";
import Topic from "./topic";
import { TopicRequest } from "./topic.types";

export default async function Topics(props: TopicRequest) {
    const topicsSummary = await fetchTopicsSummary(props.category, props.location);
    return (
        <div>
          <section id="list-topics" className="list-topics">
            <div className="container">
              <div className="list-topics-content">
                <ul>

                    {
                        topicsSummary && 
                        topicsSummary.map((topicSummary) => {
                            return (
                              <Topic key={topicSummary.id} topicSummary={topicSummary}/>
                            );
                        })
                    }
                </ul>
              </div>
            </div>    
          </section>
      </div>
    );
  }
