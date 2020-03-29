package ms.consumption;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import ms.consumption.MsConsumptionApplication;
import ms.consumption.service.IConsumptionService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = MsConsumptionApplication.class)
@WebAppConfiguration
public class MsClientManagementApplicationTests {

	private static final Logger logger = LoggerFactory.getLogger(MsClientManagementApplicationTests.class);

	@Autowired
	private IConsumptionService hystrixApi;

	@Test
	public void test() {

	}

}