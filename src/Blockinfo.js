import React, { useEffect, useState } from 'react';
import { Statistic, Grid, Card, Icon, Table } from 'semantic-ui-react';

import { useSubstrate } from './substrate-lib';

function Main (props) {
  const { api } = useSubstrate();

  const [lastHeader, setBlockInfo] = useState(0);

  useEffect(() => {
    const unsubscribeAll = null
    const getInfo = async () => {
      try {
        api.rpc.chain.subscribeNewHeads((header) => {
          setBlockInfo(header)
        })
      } catch (e) {
        console.error(e)
      }
    }
    getInfo()
    return () => unsubscribeAll && unsubscribeAll()
  }, [api.derive.chain, api.rpc.chain, lastHeader])

  return (
    <Grid.Column>
      {lastHeader && (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Block info</Table.HeaderCell>
              <Table.HeaderCell>Data</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Block number</Table.Cell>
              <Table.Cell>{lastHeader.number.toNumber()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Block hash</Table.Cell>
              <Table.Cell>{lastHeader.hash.toHuman()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>ParentHash</Table.Cell>
              <Table.Cell>{lastHeader.parentHash.toHuman()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Block state root</Table.Cell>
              <Table.Cell>{lastHeader.stateRoot.toHuman()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>block extrinsics Root</Table.Cell>
              <Table.Cell>{lastHeader.extrinsicsRoot.toHuman()}</Table.Cell>
            </Table.Row>
          </Table.Body>

          {/* <Table.Footer>Block information with block hash</Table.Footer> */}
        </Table>
      )}
    </Grid.Column>
  );
}

export default function BlockNumber (props) {
  const { api } = useSubstrate();
  return api.derive &&
    api.derive.chain &&
    api.derive.chain.bestNumber &&
    api.derive.chain.bestNumberFinalized ? (
      <Main {...props} />
    ) : null;
}
