import { MobileNavTopicEntity } from './domain/entities/MobileNavTopic.entity';
import { MobileNavSubscriberService } from './application/MobileNavSubscriber.service';
import { BurguerPrimaryPublisherService } from './application/BurguerPrimaryPublisher.service';
import { MobileSubNavTopicEntity } from './domain/entities/MobileSubNavTopic.entity';
import { MobileSubNavSubscriberService } from './application/MobileSubNavSubscriber.service';
import { NestJsPublisherService } from './application/NestJsPublisher.service';

document.addEventListener('DOMContentLoaded', () => {
    
    //

    const mobileNavTopicEntity = new MobileNavTopicEntity();
    
    new MobileNavSubscriberService(
        mobileNavTopicEntity,
    );

    new BurguerPrimaryPublisherService(
        mobileNavTopicEntity,
    );

    //

    const mobileSubNavTopicEntity = new MobileSubNavTopicEntity();

    new MobileSubNavSubscriberService(
        mobileNavTopicEntity,
        mobileSubNavTopicEntity,
    );

    new NestJsPublisherService(
        mobileSubNavTopicEntity,
    );
});

